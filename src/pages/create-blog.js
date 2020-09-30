import React, {Component} from 'react';
import { Editor, createEditorState } from 'medium-draft';


class CreateBlog extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          editorState: createEditorState(),
    };

    this.onChange = (editorState) => {
        this.setState({ editorState });
    };
  
      this.refsEditor = React.createRef();
  
    }
  
    componentDidMount() {
      this.refsEditor.current.focus();
    }

    render() {
        const { editorState } = this.state;
        return(
            <div className="site-body">
                <div className="wrapper">
                <Editor
                    ref={this.refsEditor}
                    editorState={editorState}
                    onChange={this.onChange} />
                </div>
            </div>
        )
    }
}

export default CreateBlog
