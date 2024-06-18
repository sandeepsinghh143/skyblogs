import { defineField, defineType, validation } from "sanity";

export const revalidate = 10;

export const postType = defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title", //if we don't give title name will act/shown as title it it will be shown like Title
      validation: (Rule) => Rule.required(),
      //we can also give more validation like Rule.required()error("Title should be maximum 20 characters")
      //in case of error public button will not be shown but shown in warning
      //Rule.required().warning("Title should be maximum 20 characters")
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        { type: "block", title: "Block" },
        { type: "image", options: { hotspot: true } },
        { type: "code", title: "Code Block" },
      ], // here we are inserting rich text / portable text
      /**
       * we can also write as
       * of:[defineArrayMember({type:"block"})]
       */
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "meta_description",
      type: "text",
      title: "Meta Description",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      type: "image",
      Title: "Thumbnail",
      options: {
        hotspot: true,
        //by default its false it is used to enable cropping options
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
      title: "Author",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string", name: "tag" }],
    }),
  ],
});
