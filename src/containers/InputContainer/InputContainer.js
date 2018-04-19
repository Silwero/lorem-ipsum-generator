import React, { Component } from 'react';

import Select from '../../components/Inputs/Select/Select';
import Input from '../../components/Inputs/Input/Input';

import './InputContainer.css';

export class InputContainer extends Component {
  state = {
    type: 'paragraph',
    listItems: 5,
    headerSize: 'h1',
    minLength: 3,
    maxLength: 50,
    width: 300,
    height: 100,
    id: 0
  }

  checkNumber = (el) => {
    let result = el.value.replace(/[^0-9]/gi, '');
    if (!result || result === '0') {
      result = 1;
      setTimeout(() => {
        el.select();
      }, 10)
    }

    return parseInt(result, 10);
  }

  onChangeData = (e) => {
    if (e.target.classList.contains('element')) {
      this.setState({
        type: e.target.value
      });
    }

    if (e.target.classList.contains('header')) {
      this.setState({
        headerSize: e.target.value
      });
    }

    if (e.target.classList.contains('list-items')) {
      this.setState({
        listItems: this.checkNumber(e.target)
      });
    }

    if (e.target.classList.contains('min-length')) {
      let val = this.checkNumber(e.target);
      let correctMax = val > this.state.maxLength ? val : parseInt(this.state.maxLength, 10);
      this.setState({
        minLength: val,
        maxLength: correctMax
      });
    }

    if (e.target.classList.contains('max-lenght')) {
      let val = this.checkNumber(e.target);
      let correctMin = val < this.state.minLength ? val : parseInt(this.state.minLength, 10);
      this.setState({
        maxLength: val,
        minLength: correctMin
      });
    }

    if (e.target.classList.contains('width')) {
      this.setState({
        width: this.checkNumber(e.target)
      });
    }

    if (e.target.classList.contains('height')) {
      this.setState({
        height: this.checkNumber(e.target)
      });
    }
  }

  addItem = () => {
    this.props.addItem(this.state);
    this.setState({id: this.state.id + 1});
  }

  render() {
    let list = null;

    if (this.state.type === 'ul' || this.state.type === 'ol') {
      list = <Input
            disabled={this.props.isDisabled}
            type="text"
            typeClass="list-items"
            change={this.onChangeData}
            val={this.state.listItems}
            placeholder="Number of list items"
            label="Number of list items"/>
    }

    let header = null;
    if (this.state.type === 'header') {
      header = <Select
            elementType="header"
            change={this.onChangeData}
            val={this.state.headerSize}
            label="Header size"
            elementsList={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}
            classList="item-input"/>
    }

    let classList = "item-input";

    if (!(list || header)) {
      classList +=  " full-width"
    }

    let minMax = null;

    if (this.state.type !== 'image') {
      minMax = [
          <Input
            disabled={this.props.isDisabled}
            key="min-input"
            type="text"
            typeClass="min-length"
            change={this.onChangeData}
            val={this.state.minLength}
            placeholder="Min number of words"
            label="Min number of words"/>,
          <Input
            disabled={this.props.isDisabled}
            key="max-input"
            type="text"
            typeClass="max-lenght"
            change={this.onChangeData}
            val={this.state.maxLength}
            placeholder="max number of words"
            label="Max number of words"/>
      ]
    }

    let imgSizes = null;

    if (this.state.type === 'image') {
      imgSizes = [
          <Input
            key="img-width"
            type="text"
            typeClass="width"
            change={this.onChangeData}
            val={this.state.width}
            placeholder="Min number of words"
            label="Image width(px)"/>,
          <Input
            key="img-height"
            type="text"
            typeClass="height"
            change={this.onChangeData}
            val={this.state.height}
            placeholder="max number of words"
            label="Image height(px)"/>
      ]
    }

    return [
        <div key="lorem-block-items" className="lorem-block-items">
          <Select
            label="Element"
            classList={classList}
            elementsList={this.props.elementsList}
            change={this.onChangeData}
            val={this.state.type}
            elementType="element" />
          {list}
          {header}
          {minMax}
          {imgSizes}
        </div>,
        <div key="buttons-wrapper" className="buttons-wrapper">
          <button className="button" onClick={this.addItem}>Add Element</button>
          <button className="button" onClick={this.props.removeLast}>Remove Last Added</button>
          <button className="button add-all" onClick={this.props.createAll}>Create All</button>
          <button className="button clear" onClick={this.props.clearItems}>Clear All</button>
        </div>
    ];
  }
}

export default InputContainer;
