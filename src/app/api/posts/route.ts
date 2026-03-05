import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const GET = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("community_posts")
    .select("*")
    .order("like_count", { ascending: false })
    .limit(10);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ posts: data }, { status: 200 });
};
