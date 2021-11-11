import React from 'react'
import { Accordion } from 'react-bootstrap'

const data = [
  {
    title: 'One',
    content: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`
  },
  {
    title: 'Two',
    content: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`
  },
  {
    title: 'Three',
    content: `Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`
  }
]

class CompsJobDescription extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accordionItems: []
    }
    this.handleApplyClick = this.handleApplyClick.bind(this)
  }

  componentDidMount() {
    const accordion = []

    data.forEach((i) => {
      accordion.push({
        title: i.title,
        content: i.content,
        open: false
      })
    })

    this.setState({
      accordionItems: accordion
    })
  }

  handleApplyClick() {
    console.log('Clicked on Apply')
  }

  click(i) {
    const newAccordion = this.state.accordionItems.slice()
    const index = newAccordion.indexOf(i)

    newAccordion[index].open = !newAccordion[index].open
    this.setState({ accordionItems: newAccordion })
  }

  render() {
    const sections = this.state.accordionItems.map((i) => (
      <div key={this.state.accordionItems.indexOf(i)}>
        <div
          className="title"
          onClick={this.click.bind(this, i)}
        >
          <div className="arrow-wrapper">
            <i className={i.open
              ? 'fa fa-angle-down fa-rotate-180'
              : 'fa fa-angle-down'}
            />
          </div>
          <span className="title-text">
            {i.title}
          </span>
        </div>
        <div className={i.open
          ? 'content content-open'
          : 'content'}
        >
          <div className={i.open
            ? 'content-text content-text-open'
            : 'content-text'}
          >
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
            </ul>
          </div>
        </div>
      </div>
    ))

    return (
      <div className="accordion">
        {sections}
        <Accordion data={data} />
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(CompsJobDescription)
export default (CompsJobDescription)
