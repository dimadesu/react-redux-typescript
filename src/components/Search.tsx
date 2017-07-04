import './Search.css';
import * as React from 'react';

interface Props {
  onSearch: (text: string) => void;
}

interface State {
  text: string;
}

export class Search extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      text: ''
    };
  }

  handleChange(event: any) {
    this.setState({ text: event.target.value });
    const text = event.target.value.trim();
    this.props.onSearch(text);
  }

  render () {
    return (
      <input
        className="search"
        type="text"
        placeholder="Search"
        autoFocus={true}
        value={this.state.text}
        onChange={(event) => this.handleChange(event)}
      />
    );
  }
}
