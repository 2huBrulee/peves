import React from 'react';
import { FilePicker } from 'react-file-picker'
import { Button } from 'react-bootstrap'

const FilePickerNLabel = ({...props}) =>
  <div>
      <label>
          ALGUN ARCHIVO.xlsx
      </label>
      <FilePicker
      extensions={['xlsx']}
      onChange={FileObject => console.log(FileObject.name)}
      onError={errMsg => console.log('TIPO ERRADO')}
        >
          <Button bsStyle="primary">
              Subir un EXCEL a la Base de Datos
          </Button>
        </FilePicker>
  </div>

export default FilePickerNLabel
