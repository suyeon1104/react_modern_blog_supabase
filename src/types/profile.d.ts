import type { Database } from "./databse";

interface Profile {
    id: string;
    created_at: Date;
    email: string;
    display_name: string | null;
    avatar_url: string | null;
    bio: string | null;
}

type Profile = Database["public"]["Tables"]["profiles"]["Row"];