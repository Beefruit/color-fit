import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const loginWithGoogleOauth = async (): Promise<void> => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${location.origin}/api/auth/callback`,
    },
  });
};
