import { Link, FileRoute } from "@tanstack/react-router";
import * as React from "react";
import { z } from "zod";

export const Route = new FileRoute('/').createRoute({
  component: IndexComponent,
  validateSearch:z.object({
    page:z.number().catch(1)
  })
});

function IndexComponent() {
  const pages=3;
  const{page}=Route.useSearch()

  return(
<div>Page:{page}</div>
  ) 
}
