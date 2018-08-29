# SVGTool

Expand this to a more ambitious scope:

* [X] load svg data
* [X] display the svg with data side by side
* [ ] click the path to highlight the data segment (path)
* [ ] FE: SVG editor
* [ ] FE: Gerber viewer
* [ ] FE: offline storage
* [ ] FE: UX design
* [ ] FE/BE: account manager
* [ ] BE: SVG to Gerber converter
* [ ] BE: payment integration
* [ ] BE: API to pcb manufacturing, different?
* [ ] BE: online storage
* [ ] FE/BE: secuity

## setup with [Create React App](https://github.com/facebookincubator/create-react-app)

This is ready to be deployed to http://nwmaker.github.io/svgtool.
Just run ```yarn run deploy```

## notes 

* It is easy to display SVG and show its data. But it is hard to make this interactive. 
* To make the path editable, using one svg path parser is one way to go.
* This [svgpath](https://github.com/aydos/svgpath) is close to what I am looking for.

