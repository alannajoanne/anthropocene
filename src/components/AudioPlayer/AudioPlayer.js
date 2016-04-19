import React from 'react';

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.playing = false;
  }

  static defaultProps = {
    muted: false,
    play: false,
    volume: 1,
    src: '',
    delay: 0,
    onCanPlay: function() {},
    onEnd: function() {}
  };

  componentWillReceiveProps(nextProps) {

    if (nextProps.play && !this.playing) {
      this.refs.audio.play();
      this.playing = true;
    }

    if (!nextProps.play && this.playing) {
      this.refs.audio.pause();
      this.playing = false;
    }

    this.refs.audio.volume = nextProps.muted ? 0 : nextProps.volume / 100;
  }

  ended(e) {
    if (this.props.loop && this.props.delay > 0) {
      setTimeout(() => this.refs.audio.play(), this.props.delay);
    }

    this.props.onEnd(e);
  }

  play() {
    this.refs.audio.play();
  }

  get readyState() {
    return this.refs.audio.readyState;
  }

  render() {
    return (
      <audio ref="audio"
             onCanPlay={this.props.onCanPlay.bind(this)}
             onEnded={this.ended.bind(this)}
             autoPlay={this.props.autoPlay}
             loop={this.props.loop && this.props.delay === 0}>
        <source type="audio/mp3" src={this.props.src}/>
      </audio>
    )
  }
}