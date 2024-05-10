import { injectEndpoints } from "./api";

interface APIDataResponse<D> {
  success: boolean;
  data: D;
}

const authenticationEndpoints = injectEndpoints({
  endpoints: (builder) => ({}),

  overrideExisting: true,
});

export const { endpoints: authEndpoints } = authenticationEndpoints;
