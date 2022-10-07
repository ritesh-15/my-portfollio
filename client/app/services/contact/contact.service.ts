import {
  IContact,
  INewContactResponse,
} from "../../../interfaces/contact_interface";
import apiService from "../api/api.service";

export const contactService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    newContact: builder.mutation<INewContactResponse, IContact>({
      query: (data: IContact) => {
        return {
          url: "/contact",
          body: data,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useNewContactMutation } = contactService;
