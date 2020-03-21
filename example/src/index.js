require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var button = require('../../src/index');

znui.react.createApplication({
    render: <div>
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
    </div>
});