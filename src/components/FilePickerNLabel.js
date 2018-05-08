import React from 'react';
import { FilePicker } from 'react-file-picker'
import { Button } from 'react-bootstrap'

const FilePickerNLabel = ({parse=f=>f,me,...props}) =>
  <div>
      <FilePicker
      extensions={['xlsx']}
      onChange={FileObject => parse(FileObject,me)}
      onError={errMsg => console.log('TIPO ERRADO')}
        >
          <Button bsStyle="primary">
              Escoger excel
          </Button>
        </FilePicker>
  </div>

export default FilePickerNLabel
