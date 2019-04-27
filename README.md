# My Website!
###### Written by Joshua Beto

## Attribution

I would first like to thank John Pham for his website over at [pham.codes](https://pham.codes/) for basing the styling of my website off of.

The following are other sources that I used in creating this website (In no particular order):
* JQuery
* Jekyll
* Typed.js
* Bulma
* Font Awesome
* Github Pages
* https://codepen.io/merb/pen/yOwJjj

## Issues

* If you notice any issues with the website, feel free to contact me at j65beto@gmail.com or create an issue on the project page

## Build Command
`bundle exec jekyll serve`

## Documentation

For further updates when I finally get to re-doing this website in a couple months, the following describes architecture decisions
made and the overall structure of the website.

### Permalinks

For sake of simplicity, the directory structure is the permalink structure. Do not put pages in a pages directory and add custom permalinks. 
It's a lot of maintenance for low gain.

### Collections vs. _data

Use collections when you have need to publish actual documents. Documents are defined as html pages that include both content and style information. From previous research, collections are best thought of as an alternative to `_posts` or `_pages` used to group related documents. 

Do **not** use collections for storing only data or simple summaries/excerpts to be used by other documents. Those should be designated under `_data` as part of configuration. If a summary or description should become long enough to warrant it's own page, restructure it into a document as a separate page or part of a collection.

### Projects

Projects can be edited via the `projects.yml` file under the `_data` directory. The order of the projects dictates how they are displayed in the page. 
If you need to write a longer summary, you can use `>` after the `summary:` - this ignores any new lines following it within the content.

In the future if project descriptions become long enough to warrant their own pages, you can restructure them as collections. As a future feature, just add a `hidden` tag in the front matter of each project in the collection to decide if a proejct should be included in the final build.

### Sections

For now since I have a simple website, you can edit each section in the `sections.yml` file under the `_data` directory. The order of each section dictates the order that it is displayed in the final build. Should a section become large enough, restructure that section into a document as a separate page or part of a collection called `_sections`.

* **Note:** favicon.ico is there to stop that annoying error during testing. The actual file is empty.

### Future

- Aesthetics
- Single page
- CI (Travis)/Build automation
- Find a better pipeline to include js scripts (Webpack?)