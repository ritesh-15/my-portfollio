import {
  IContact,
  IGetAllContact,
  INewContact,
  INewContactResponse,
} from "../../../interfaces/contact_interface";
import apiService from "../api/api.service";

export const contactService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    newContact: builder.mutation<INewContactResponse, INewContact>({
      query: (data: INewContact) => {
        return {
          url: "/contact",
          body: data,
          method: "POST",
        };
      },
    }),
    getAllContacts: builder.query<IGetAllContact, any>({
      query: () => {
        return {
          url: "/contact",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useNewContactMutation, useGetAllContactsQuery } = contactService;
