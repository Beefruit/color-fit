import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const supabase = await createClient();
  const { id } = await params;

  const { data, error } = await supabase.rpc("increment_like_count", {
    post_id: id,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ like_count: data }, { status: 200 });
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const supabase = await createClient();
  const { id } = await params;

  const { data, error } = await supabase.rpc("decrement_like_count", {
    post_id: id,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ like_count: data }, { status: 200 });
}
