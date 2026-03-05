import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const GET = async ({ params }: { params: { id: string } }) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("community_posts")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ post: data }, { status: 200 });
};
