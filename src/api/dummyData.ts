import { type Song } from '@api/types';

export let mockSongs: Song[] = [
    {
        id: 'song-1',
        name: 'Bohemian Rhapsody',
        duration: 355, // 5:55
        lyrics: `Is this the real life? Is this just fantasy?
Caught in a landslide, no escape from reality
Open your eyes, look up to the skies and see
I'm just a poor boy, I need no sympathy
Because I'm easy come, easy go, little high, little low
Any way the wind blows doesn't really matter to me, to me...`
    },

    {
        id: 'song-2',
        name: 'Billie Jean',
        duration: 294, // 4:54
        lyrics: `She was more like a beauty queen from a movie scene
I said don't mind, but what do you mean, I am the one
Who will dance on the floor in the round?
She said I am the one, who will dance on the floor in the round
People always told me be careful of what you do
And don't go around breaking young girls' hearts...`
    },
    {
        id: 'song-3',
        name: 'Shape of You',
        duration: 233, // 3:53
        lyrics: `The club isn't the best place to find a lover
So the bar is where I go
Me and my friends at the table doing shots
Drinking fast and then we talk slow
Come over and start up a conversation with just me
And trust me I'll give it a chance now...`
    },
    {
        id: 'song-4',
        name: 'Hotel California',
        duration: 390, // 6:30
        lyrics: `On a dark desert highway, cool wind in my hair
Warm smell of colitas, rising up through the air
Up ahead in the distance, I saw a shimmering light
My head grew heavy and my sight grew dim
I had to stop for the night...`
    },
    {
        id: 'song-5',
        name: 'Blinding Lights',
        duration: 200, // 3:20
        lyrics: `Yeah...
I've been tryna call
I've been on my own for long enough
Maybe you can show me how to love, maybe
I'm going through withdrawals
You don't even have to do too much
You can turn me on with just a touch, baby...`
    }
];
