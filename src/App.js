import React, { Component } from 'react';
import './App.css';

import Paragraph from './components/Outputs/Paragraph';
import Blockquote from './components/Outputs/Blockquote';
import Header from './components/Outputs/Header';
import Ul from './components/Outputs/Ul';
import Ol from './components/Outputs/Ol';
import createLi from './components/Outputs/Li';
import Image from './components/Outputs/Image';
import allElements from './components/Outputs/AllElements/AllElementsNew';

import Mark from './components/functionalComponents/mark/mark';
import createText from './components/functionalComponents/CreateText/CreateText';

import InputContainer from './containers/InputContainer/InputContainer';
import AdditionalElementsInputContainer from './containers/AdditionalElementsInputContainer/AdditionalElementsInputContainer';

class App extends Component {
  state = {
    items: [],
    copyed: false,
    elementsList: ['paragraph', 'ul', 'ol', 'blockquote', 'header', 'image'],
    createAllList: ['h1', 'paragraph', 'ul', 'h2', 'blockquote', 'paragraph', 'h3', 'paragraph', 'image', 'paragraph', 'h4', 'paragraph', 'h5', 'paragraph', 'ol', 'h6', 'paragraph' ],
    elementsSwowed: false,
    elementsHighlighted: false,
    additionalElements: {
      strong: false,
      i: false,
      em: false,
      abbr: false,
      sup: false,
      sub: false,
      b: false,
      a: false
    },
    isDisabledCounters: false,
    isImage: false
  }

  componentDidMount() {
    this.pastToCopy();
  }

  pastToCopy = () => {
    this.setState({copyText: this.generatedContent.innerHTML});
  }

  addItem(item) {
    let newEl = null;
    let text;
    switch(item.type) {
      case 'paragraph':
        text = createText({
          units: 'sentences',
          sentenceLowerBound: item.minLength,
          sentenceUpperBound: item.maxLength
        }, this.state.additionalElements);
        newEl = <Paragraph key={item.id}  text={text} />;
        break;
      case 'image':
        newEl = <Image key={item.id} width={item.width} height={item.height} altText='Some alt text' />;
        break;
      case 'blockquote':
        text = createText({
          units: 'sentences',
          sentenceLowerBound: item.minLength,
          sentenceUpperBound: item.maxLength
        }, this.state.additionalElements);
        newEl = <Blockquote key={item.id}  text={text} />;
        break;
      case 'header':
        text = createText({
          units: 'sentences',
          sentenceLowerBound: item.minLength,
          sentenceUpperBound: item.maxLength
        }, this.state.additionalElements);
        if (text === '.') {
          text = "Lorem"
        }
        newEl = <Header key={item.id} headerSize={item.headerSize} text={text} />;
        break;
      case 'ul':
        const ulLi = createLi(item, this.state.additionalElements);
        newEl = <Ul key={item.id} items={ulLi}/>;
        break;
      case 'ol':
        const olLi = createLi(item, this.state.additionalElements);
        newEl = <Ol key={item.id} items={olLi}/>;
        break;
      default: return;
    }

    let newItems = this.state.items.concat(newEl);
    this.setState({items: newItems}, () => {
      this.pastToCopy();
    });
  }

  clearElements = () => {
    this.setState({items: []});
  }

  selectText = (e) => {
    if (!this.state.items.length) return;

    const doc = document;
    let text = e.currentTarget;
    let range,
        selection;

    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    document.execCommand("Copy");
    this.setState({copyed: true});
    const sel = window.getSelection ? window.getSelection() : document.selection;
    if (sel) {
        if (sel.removeAllRanges) {
            sel.removeAllRanges();
        } else if (sel.empty) {
            sel.empty();
        }
    }

    setTimeout(() => {
      this.setState({copyed: false});
    }, 500);
  }

  createAll = () => {
    const newItems = [...this.state.items, allElements(this.state.createAllList, this.state.additionalElements)];
    this.setState({items: newItems}, () => {
      this.pastToCopy();
    });
  }

  showMarkToggle = () => {
    this.setState(prevState => {
      return {elementsSwowed: !prevState.elementsSwowed};
    });
  }

  highlightMarkToggle = () => {
    this.setState(prevState => {
      return {elementsHighlighted: !prevState.elementsHighlighted};
    });
  }

  toggleAdditionalAdded = (target) => {
    let newAdditionalElements = {
      ...this.state.additionalElements
    }
    newAdditionalElements[target] = !this.state.additionalElements[target];

    this.setState({
      additionalElements: newAdditionalElements
    });
  }

  removeLast = () => {
    if (!this.state.items.length) return;

    let newItems = [
      ...this.state.items
    ];
    newItems.splice(-1, 1);

    this.setState({items: newItems}, () => {
      this.pastToCopy();
    });
  }

  render() {
    let output = !this.state.items.length ?
      <p style={{textAlign: 'center'}}>No elements added</p> :
      this.state.items;

    let outputHTML = !this.state.items.length ?
      <p style={{textAlign: 'center'}}>No elements added</p> :
      this.state.copyText;

    let classList = this.state.copyed ? 'copyed opened' : 'copyed';

    let showedClasses = 'wysiwyg';

    if (this.state.elementsSwowed && this.state.items.length) {
      showedClasses += ' show-created';
    }

    if (this.state.elementsHighlighted && this.state.items.length) {
      console.log(this.state.items.length);
      showedClasses += ' show-highlighted';
    }

    return (
      <div className="App">
        <h1>Lorem ipsum generator</h1>
        <p style={{textAlign: 'center', fontStyle: 'italic', marginBottom: '30px'}}>To copy the code click on the gray block!</p>
        <div className="container">
          <div className="row">
            <div className="col input-container">
              <div className="lorem-block">
                <InputContainer isDisabled={this.state.isDisabledCounters} createAll={this.createAll} removeLast={this.removeLast} elementsList={this.state.elementsList} clearItems={this.clearElements} addItem={(item) => this.addItem(item)} />
                <AdditionalElementsInputContainer isImage={this.state.isImage} change={this.toggleAdditionalAdded} elements={this.state.additionalElements} />
              </div>
            </div>
            <div className="col output-container">
              <div className="wrapper" onClick={this.selectText}>
                {outputHTML}
              </div>
            </div>
          </div>
          <div className="output-example">
            <div className="mark-created">
              <Mark title='Now works only with "Create All"' isActive={this.state.elementsHighlighted} label='Highlight inline elements' change={this.highlightMarkToggle} />
              <Mark isActive={this.state.elementsSwowed} label='Show created' change={this.showMarkToggle} />
            </div>
            <h2 style={{textAlign: 'center', marginTop: '0', color: '#828282'}}>Preview</h2>
            <div className={showedClasses} ref={r => this.generatedContent = r}>
              {output}
            </div>
          </div>
        </div>
        <div className={classList}>
          <p>Copyed!!!</p>
        </div>
      </div>
    );
  }
}

export default App;
