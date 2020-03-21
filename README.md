# znui-react-button
Button Component.

[![npm](https://img.shields.io/npm/v/znui-react-button.svg)](https://www.npmjs.com/package/znui-react-button)
[![npm](https://img.shields.io/npm/dm/znui-react-button.svg)](https://www.npmjs.com/package/znui-react-button)

## Demo

[Take a look at the demo](https://znui.github.io/znui-react-button/example/www/index.html)

## Installation

```bash
npm install znui-react-button -s
```

## Usage

```javascript

var ReactDOM = require('react-dom');
var button = require('znui-react-button');

ReactDOM.render(<div>
        <button.Button value="xx" icon="faPlus" status="danger" disabled={false} />
        <button.Button value="xx" icon="faPlus" status="success" disabled={false} />
        <button.Button value="xx" icon="faPlus" status="primary" disabled={false} />
        <button.Button value="xx" icon="faPlus" disabled={true} />
        <button.Buttons data={[
            {value: 'test', icon: 'faPlus', status: 'success'},
            {value: 'test1', icon: 'faPlus', status: 'success'},
            {value: 'test2', icon: 'faPlus', status: 'success'},
            {value: 'test3', icon: 'faPlus', status: 'success'},
            {value: 'test4', icon: 'faPlus', status: 'success'}
        ]} />
    </div>, document.getElementById('container'));

```

## License

MIT