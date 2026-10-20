import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { configService } from "@api/configService";
import { getApiErrorMessage } from "@api/apiError";
import type { UserValidationsDTO } from "@api/api.d";

interface ConfigContextValue {
    userValidations: UserValidationsDTO | null;
    validationsLoading: boolean;
    validationsError: string | null;
    reloadValidations: () => Promise<void>;
}

const ConfigContext = createContext<ConfigContextValue | undefined>(undefined);

export function ConfigProvider({ children }: { children: ReactNode }) {
    const [userValidations, setUserValidations] = useState<UserValidationsDTO | null>(null);
    const [validationsLoading, setValidationsLoading] = useState(true);
    const [validationsError, setValidationsError] = useState<string | null>(null);

    const load = useCallback(async () => {
        setValidationsLoading(true);
        setValidationsError(null);
        try {
            setUserValidations(await configService.getUserValidations());
        } catch (error) {
            setUserValidations(null);
            setValidationsError(getApiErrorMessage(error));
        } finally {
            setValidationsLoading(false);
        }
    }, []);

    useEffect(() => {
        void load();
    }, [load]);

    return (
        <ConfigContext.Provider
            value={{
                userValidations,
                validationsLoading,
                validationsError,
                reloadValidations: load,
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}

export function useConfig(): ConfigContextValue {
    const context = useContext(ConfigContext);
    if (!context) throw new Error("useConfig debe usarse dentro de <ConfigProvider>");
    return context;
}
