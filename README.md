# ngx-clamp

### Angular (12+) directive that clamps the content of an element by adding an ellipsis to it if the content inside is too long.

![NPM release](https://github.com/MSubhan01/ngx-clamp/actions/workflows/main.yml/badge.svg)
![version on NPM](https://img.shields.io/npm/v/ngx-clamp)
![bundle size](https://img.shields.io/bundlephobia/minzip/ngx-clamp)
![license](https://img.shields.io/github/license/MSubhan01/ngx-clamp)
[![GitHub issues](https://img.shields.io/github/issues/MSubhan01/ngx-clamp.svg)](https://github.com/MSubhan01/ngx-clamp/issues)
[![GitHub license](https://img.shields.io/github/license/MSubhan01/ngx-clamp.svg)](https://github.com/MSubhan01/ngx-clamp/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/ngx-clamp.svg)](https://www.npmjs.com/package/ngx-clamp)

It uses [clamp.ts](https://github.com/aamir1995/clamp.ts) library behind the scene to apply the ellipsis.

It automatically re-clamps itself when the element or the browser window change size.

## Installation
For Angular 12, use version latest.

You can install ngx-clamp using NPM or Yarn:

```
npm install ngx-clamp
```

```
yarn install ngx-clamp
```

## Usage

You can use it by just adding the directive selector to the element and it will clamp that element's content to two lines.
Example:

```typescript
<p ngx-clamp>
...
</p>
```

You can also change the options by adding the input of "[ngxClampOptions](#ngxclampoptions)" on the element.
Example:

```typescript
<p ngx-clamp [ngxClampOptions]="{ clamp: 3, // options here, read below for more info }">
...
</p>
```

You can also listen to '[ngxClampResponse](#ngxclampresponse)' event which is emitting the original value upon clamping. This can be useful if you want to display the original content in a tooltip for instance.
Example:

```typescript
<p ngx-clamp (ngxClampResponse)="getTooltipContent($event)">
...
</p>
```

## ngxClampOptions
|Option   |Type   |Default   |Description   |
|---|---|---|---|
| clamp | `number|string|‘auto’` | `2` | This controls where and when to clamp the text of an element. Submitting a number controls the number of lines that should be displayed. Second, you can submit a CSS value (in px or em) that controls the height of the element as a String. Finally, you can submit the word `'auto'` as a string. Auto will try to fill up the available space with the content and then automatically clamp once content no longer fits. This last option should only be set if a static  height is being set on the element elsewhere (such as through CSS) otherwise no  clamping will be done. |
| useNativeClamp | boolean | `true` | Enables or disables using the native `-webkit-line-clamp` in a supported browser (ie. Webkit). It defaults to true if you're using Webkit, but it can behave wonky sometimes so you can set it to false to use the JavaScript-based solution. |
| truncationChar | string | `…` | The character to insert at the end of the HTML element after truncation is performed. This defaults to an ellipsis (…). |
| truncationHTML | string || A string of HTML to insert before the truncation character. This is useful if you'd like to add a "Read more" link or some such thing at the end of your clamped node. |
| splitOnChars | Array | `['.', '-', '–', '—', ' ']` | Determines what characters to use to chunk an element into smaller pieces. you have an option to pass a list of characters it can use. For example, it you pass an array of `['.', ',', ' ']` then it will first remove sentences, then remove comma-phrases, and remove words, and finally remove individual characters to try and find the correct height. This will lead to increased performance and less looping when removing larger pieces of text (such as in paragraphs). The default is set to remove sentences (periods), hypens, en-dashes, em-dashes, and finally words  (spaces). Removing by character is always enabled as the last attempt no matter what is submitted in the array. |
| animate | Boolean | `false` | Silly little easter-egg that, when set to true, will animate removing individual characters from the end of the element until the content fits. Defaults to `false`. |

## (ngxClampResponse)
|Option   |Type   |Description   |
|---|---|---|
|original|string|Original content.|
|clamped|string|Clamped content.|
