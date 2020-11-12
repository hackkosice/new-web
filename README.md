# new-web

[![Hack Kosice](https://circleci.com/gh/hackkosice/new-web.svg?style=shield)](https://app.circleci.com/pipelines/github/hackkosice)

New website for Hack Kosice using Hugo.

## Making changes

### Editing live

When you want to make changes to the live website, you can either use Git (for developers mostly), or edit the contents directly in GitHub. All changes on the `master` branch will be automatically tested for correctness, built and deployed to [dev.hackkosice.com/master](https://dev.hackkosice.com/master), or substitute master with any branch name. The update should take at most couple of seconds. You can check when the website was last built in the footer.

### Local installation

If you prefer developing locally (you can preview any changes immediately and without having to commit), follow these steps:

1.  [Install Hugo extended](https://gohugo.io/getting-started/installing/)
2.  `git clone git@github.com:hackkosice/new-web`
3.  `hugo server -DF` to start a local server (`-DF` is to include drafts and posts dated in the future) or just `hugo -DF` to build the website (to the `public` directory)

If you are developing locally, running `hugo server` will rebuild on any file changes, reflecting updates automatically and immediately.

### Contributing

[GitHub issues](https://github.com/hackkosice/new-web/issues) shows all things that still *need to be done*. Please, take any issue and just do it 🙂

## Getting Started

### Structure

- `assets` - images and other assets that need pre-processing (usually, all images are loaded from this folder, so that they can be resized, compressed, and cut as needed)
- `config.yml` - global configuration (website title, menu, metadata, other options)
- `content` - contains all the content: pages, blog posts, portfolio
- `static` - images and other static assets that are kept without any modification (unlike `assets`)
- `themes/orbitor-hugo` - the theme, defining how `content` is viewed
    - `assets` - JS and CSS code
    - `layouts` - HTML templates, HTML code and shortcodes
    
### Page metadata

Each page has a block delimited by `---`, containing information such as the page's title, date, appearance in the menu, whether it should be published, and more. The page metadata, as well as all other configuration blocks, are written in [YAML](https://github.com/Animosity/CraftIRC/wiki/Complete-idiot's-introduction-to-yaml). For example:

```yaml
---
title: Page example
date: 2020-07-06T11:46:13+00:00
description: This will be shown in google search and other places as a description.
bgImage: "images/bg/background.jpg"
menu: main
---

...website content goes here!
```

If you add `draft: true` to the metadata, the given page will not be published in production.

### Create a simple page

Content of each page, after the metadata block, is written in [Markdown](https://www.markdownguide.org/basic-syntax/).

1.  Create a new file in the `content` directory, named `something.md` (where `/something` is be the path how you access the page)
2.  Copy the content from [bare-markdown.md](https://github.com/hackkosice/new-web/blob/master/content/other/bare-markdown.md), and edit it as needed. The file contains page metadata (delimited by `---`), then page contents.

### Create a rich page

A more advanced page can be composed of sections of various types. The `basic` type is just what you saw above - a simple page is just one `basic` section.
 
- A rich page is distinguished by specifying `use_sections: true` in the page metadata. See [preview-all-sections.md](https://github.com/hackkosice/new-web/blob/master/content/other/preview-all-sections.md) for an example.
- In Markdown, you create a section by surrounding the content with `{{< section type="banner" config="banner1" >}}` and `{{< /section >}}`, where `type` defines the type of the row, and `config` specifies which values from the page metadata should be used to populate the section with data. See the example file.

The following **page types** are supported:

- `basic`
- `banner`
- `bannerFeature`
- `feature`
- `cta`
- `project`
- `counter`
- `clients`
- `testimonial`
- `bigcounter`
- `promovideo`
- `team`
- `pricing`
- `services`
- `casestudy`
- `solutions`
- `smallcta`
- `contact`
- `map`
- `branch`

### Add a page to the menu

Use the following code in the page's metadata to add the page to the `main` menu:

```yaml
menu: main
```

or customise the menu entry with more options

```yaml
menu:
  main:
    identifier: blog_post_3
    name: Blog post 3
    parent: Blog
    weight: 20
```

### Include an image

Upload the image to the `assets` folder (in a reasonable subdirectory) and use the following shortcode in markdown files (see [bare-markdown.md](https://github.com/hackkosice/new-web/blob/master/content/other/bare-markdown.md) for usage):

```markdown
{{< image asset="images/lectures/hacker.jpg" format="400x267 q60 jpg" alt="Hacker" >}}
```

with the following parameters:

- `asset` is a path to the image within the `assets` folder
- `format` contains information about how the image should be compressed:
    - size (width x height)
    - quality (`q100` means 100% quality), where `q60` is a good value to choose as you still can't see a difference by eye (or `q80` if you really need a high-quality image)
    - format - you can just use `jpg` in most cases
- `alt` - alternate text (description of the image), shown if the image cannot be displayed (i.e. the user is blind and has a screen reader, or when loading of images is disabled)

### Include another file

If you want the same part/section/text to be included in multiple pages:

- create a file with the *shared* content in the `assets` folder (for example: [included-file.md](https://github.com/hackkosice/new-web/blob/master/assets/sample/included-file.md))
- use the following shortcode in all pages where you want to include the content, where `file` is the relative location of the file within the `assets` folder:
    
    ```markdown
    {{< include file="sample/included-file.md" >}}
    ```
## Development advice

- When adding script/style/font files, put it in the `assets` folder and use at least [Hugo's fingerprint](https://gohugo.io/hugo-pipes/fingerprint/) functionality to include the file's hash in its file name. This is important because **Firebase is set up to allow caching of all script/style/font files for up to 1 year**, therefore including a file without its fingerprint in the file name will result in the file almost never being updated on the client side.
