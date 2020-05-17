import React from "react";

interface Props {
  src: string;
  className: string;
}

interface States {
  src: string;
  failed: boolean;
}

export default class ImagePreview extends React.Component<Props, States> {
  readonly state: States = {
    src: "",
    failed: false,
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: States) {
    if (nextProps.src !== prevState.src) {
      return {
        src: nextProps.src,
        failed: false,
      };
    }
    return null;
  }

  onError = () => {
    this.setState({ failed: true });
  };

  render() {
    const { className } = this.props;
    const { src, failed } = this.state;
    if (failed || src === "" || src === undefined) return null;

    return (
      <img
        src={src}
        className={className}
        alt="recipe"
        onError={this.onError}
      />
    );
  }
}
