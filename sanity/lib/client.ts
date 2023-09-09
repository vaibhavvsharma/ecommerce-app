import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
   "skHHPo1GcZCODeBQnRkoGDPlFRI9KlnkEp2fT2PrDa3wbQ7a6zEv1Ldip03kgMElcujV0qz1ailQehyyGD6lJSfgPD3ZMP29Mv9iVnHteMjc1IISC6ZEOn7tqxqSp1FwBKxp9LrF9V4O02U6vr2udVHD3F0MSB2fUUsyMXihbH6yrMUbf6vN",
})
