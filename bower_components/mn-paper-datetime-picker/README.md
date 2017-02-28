paper-time-picker
==========
Material Design time picker, compatible with *Polymer 1.0*

Provides a responsive time picker based on the material design spec. This
component aims to be a clone of the time picker introduced in Android Lollipop.

![wide picker screenshot][wide] ![narrow picker screenshot][narrow]


## Examples:

Default picker:

```html
<paper-datetime-picker></paper-datetime-picker>
```
for 24h format
```html
<paper-datetime-picker locale="de"></paper-datetime-picker>

If you include this element as part of `paper-dialog`, use the class
`"paper-datetime-picker-dialog"` on the dialog in order to give it proper styling.

```html
<paper-dialog id="dialog" modal class="paper-time-picker-dialog"
  on-iron-overlay-closed="dismissDialog">
  <paper-datetime-picker id="datetimePicker" datetime="[[datetime]]"></paper-datetime-picker>
  <div class="buttons">
    <paper-button dialog-dismiss>Cancel</paper-button>
    <paper-button dialog-confirm>OK</paper-button>
  </div>
</paper-dialog>
```

The date and time picker components are from https://github.com/bendavis78/paper-date-picker and https://github.com/bendavis78/paper-time-picker. Thanks [bendavis78] (https://github.com/bendavis78).

[wide]: http://i.imgur.com/kosRJrF.png
[narrow]: http://i.imgur.com/s3honuG.png
[donate]: http://www.boldidea.org/donate-badge-md-1.png
