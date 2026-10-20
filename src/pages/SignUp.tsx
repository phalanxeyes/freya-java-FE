import { useMemo, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@context/AuthContext";
import { useConfig } from "@context/ConfigContext";
import { getApiErrorMessage } from "@api/apiError";
import AuthInput from "@components/auth/AuthInput";
import {
    describeUserRule,
    toUserFieldRule,
    validateConfirmPassword,
    validateUserField,
    type UserFieldName,
    type UserFieldRule,
} from "../lib/userValidation";

type SignUpField = UserFieldName | "confirmPassword";

const INITIAL_TOUCHED: Record<SignUpField, boolean> = {
    username: false,
    password: false,
    confirmPassword: false,
};

function counterClass(length: number, rule: UserFieldRule | null): string {
    if (!rule) return "text-dusty-olive-400";
    if (rule.max !== null && length > rule.max) return "text-dark-walnut-700";
    if (rule.min !== null && length > 0 && length < rule.min) return "text-olive-bark-600";
    if (length > 0) return "text-espresso-700";
    return "text-dusty-olive-400";
}

function RuleHint({ rule, length }: { rule: UserFieldRule | null; length: number }) {
    if (!rule) return null;

    return (
        <span className="flex items-center justify-between gap-3">
            <span>{describeUserRule(rule)}</span>
            <span className={counterClass(length, rule)}>
                {length}
                {rule.max !== null ? `/${rule.max}` : ""}
            </span>
        </span>
    );
}

export default function SignUp() {
    const { register } = useAuth();
    const { userValidations, validationsLoading, validationsError, reloadValidations } = useConfig();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [touched, setTouched] = useState(INITIAL_TOUCHED);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const usernameRule = useMemo(
        () => (userValidations ? toUserFieldRule(userValidations.username) : null),
        [userValidations],
    );
    const passwordRule = useMemo(
        () => (userValidations ? toUserFieldRule(userValidations.password) : null),
        [userValidations],
    );

    const usernameError = usernameRule ? validateUserField("username", username, usernameRule) : null;
    const passwordError = passwordRule ? validateUserField("password", password, passwordRule) : null;
    const confirmError = passwordRule
        ? validateConfirmPassword(confirmPassword, password, passwordRule.required)
        : null;

    const usernameLength = username.trim().length;
    const passwordLength = password.length;
    const validationsBlocked = !userValidations || !!validationsError;

    const markTouched = (field: SignUpField) => {
        setTouched((current) => (current[field] ? current : { ...current, [field]: true }));
    };

    const clearApiError = () => {
        if (error) setError(null);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setTouched({ username: true, password: true, confirmPassword: true });

        if (!userValidations || !usernameRule || !passwordRule) return;

        const errors: Record<SignUpField, string | null> = {
            username: usernameError,
            password: passwordError,
            confirmPassword: confirmError,
        };
        const firstInvalid = (Object.keys(errors) as SignUpField[]).find((field) => errors[field]);
        if (firstInvalid) {
            document.getElementById(firstInvalid)?.focus();
            return;
        }

        setLoading(true);
        try {
            await register({ username: username.trim(), password });
            navigate("/");
        } catch (err) {
            setError(getApiErrorMessage(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center">
            <h1 className="text-2xl font-bold text-espresso-900">Crear cuenta</h1>
            <p className="mt-1 text-sm text-dusty-olive-700">
                Registrate con tu usuario para empezar.
            </p>

            {validationsLoading && !userValidations && (
                <p role="status" className="mt-4 text-sm text-dusty-olive-600">
                    Cargando validaciones del servidor...
                </p>
            )}

            {validationsError && (
                <div
                    role="alert"
                    className="mt-4 rounded-xl bg-dark-walnut-100 px-3 py-2 text-sm text-dark-walnut-800"
                >
                    <p>{validationsError}</p>
                    <button
                        type="button"
                        onClick={() => void reloadValidations()}
                        className="mt-2 text-xs font-semibold underline underline-offset-2 hover:text-dark-walnut-900"
                    >
                        Reintentar
                    </button>
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <AuthInput
                    id="username"
                    label="Usuario"
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        clearApiError();
                    }}
                    onBlur={() => markTouched("username")}
                    required={usernameRule?.required ?? true}
                    minLength={usernameRule?.min ?? undefined}
                    maxLength={usernameRule?.max ?? undefined}
                    error={touched.username ? usernameError : null}
                    hint={<RuleHint rule={usernameRule} length={usernameLength} />}
                />
                <AuthInput
                    id="password"
                    label="Contraseña"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        clearApiError();
                    }}
                    onBlur={() => markTouched("password")}
                    required={passwordRule?.required ?? true}
                    minLength={passwordRule?.min ?? undefined}
                    maxLength={passwordRule?.max ?? undefined}
                    error={touched.password ? passwordError : null}
                    hint={<RuleHint rule={passwordRule} length={passwordLength} />}
                />
                <AuthInput
                    id="confirmPassword"
                    label="Confirmar contraseña"
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        clearApiError();
                    }}
                    onBlur={() => markTouched("confirmPassword")}
                    required={passwordRule?.required ?? true}
                    maxLength={passwordRule?.max ?? undefined}
                    error={touched.confirmPassword ? confirmError : null}
                    hint="Repetí la contraseña."
                />

                {error && (
                    <p role="alert" className="text-sm font-medium text-dark-walnut-700">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading || validationsBlocked}
                    className="w-full rounded-full bg-espresso-800 px-4 py-2 text-sm font-medium text-sand-50 transition-colors hover:bg-espresso-700 disabled:opacity-50"
                >
                    {loading ? "Creando cuenta..." : "Registrarme"}
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-dusty-olive-700">
                ¿Ya tenés cuenta?{" "}
                <Link to="/login" className="font-medium text-espresso-700 hover:underline">
                    Iniciá sesión
                </Link>
            </p>
        </div>
    );
}
