import React from "react";

export default async function page({ params }: { params: string }) {
  console.log((await params).dormitory_name);
  return <div>teasdsast</div>;
}
