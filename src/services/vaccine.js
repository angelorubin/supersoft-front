import { emptySplitApi } from "config/emptySplitApi";

export const vaccineApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getVaccines: builder.query({
      query: () => `vaccine`,
    }),
  }),
});

export const { useGetVaccinesQuery } = vaccineApi;
