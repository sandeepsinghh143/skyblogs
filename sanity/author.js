import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Author Name",
    }),
    defineField({
      name: "bio",
      type: "string",
      title: "Bio",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
