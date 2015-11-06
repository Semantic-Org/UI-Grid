### Version 2.1.5 - Nov 1, 2015

- **Grid** - Fixes attached segment 1px offset inside grid column [#3226](https://github.com/Semantic-Org/Semantic-UI/issues/3226)
- **Grid** - Fixes some inconsistencies with `widescreen only` class [#3161](https://github.com/Semantic-Org/Semantic-UI/issues/3161) **Thanks @mdehoog**

### Version 2.1.4 - Sep 13, 2015

- **Table** - Fixed issue where `(x) column segment table` was inheriting accidentally inheriting some grid styles
- **Grid** - Fixed `middle aligned grid` not applying to columns [#2959](https://github.com/Semantic-Org/Semantic-UI/issues/2959)

#### Features

- **Grid** - Added new responsive [`reversed`](http://www.semantic-ui.com/collections/grid.html#responsive-order) variations for reversing column order, these are also compatible with other grid types like `divided` and `celled` by device [#2685](https://github.com/Semantic-Org/Semantic-UI/issues/2685)

#### Bugs

- **Grid** - Fixed issue where `relaxed stackable grid` would have incorrect margin on mobile width
- **Grid** - Fixed issue where nested `stackable grid` would have incorrect margin on mobile.
- **Menu** - Fixed `(x) column` nested grid with alignment stacking vertically (wrong flex-direction) [#2810](https://github.com/Semantic-Org/Semantic-UI/issues/2810)
- **Grid / Container** - `ui relaxed grid container` and `ui very relaxed grid container` will now all render at same container width
- **Grid** - Fixed `stackable celled grid` having doubled border width between rows

### Version 2.0.3 - July 8, 2015

- **Divider/Grid** - `vertical divider` no longer has inexplicable right border when stacked on mobile [#2558](https://github.com/Semantic-Org/Semantic-UI/issues/2558)

### Version 2.0.0 - June 30, 2015

- **Grid** - `page grid` has been deprecated.  `page grids` used percentage gutters which made it unnecessarily difficult to style responsive page content. Moving forward we recommend using `ui container` a fixed width responsive container for holding page contents.
- **Container** - Containers are fixed width containers meant for holding page contents, and are a simpler alternative to `ui page grid`, view more [examples in docs](http://www.semantic-ui.com/elements/container.html#examples)
- **Grid** - Grids now use `flexbox`, columns are now all equal height by default. New flexbox alignment types like `stretch` have been added for easier vertical alignment.
- **Multiple UI** - Many components now use flexbox, which means previous confusing fixes like `font-size: 0;` to remove [white-space from inline block](https://css-tricks.com/fighting-the-space-between-inline-block-elements/) is no longer necessary. Removing this hack, now means any element can be a direct child of `grid` or `menu`.
- **Grid** - Grids are now `flexbox` and `equal height` by default, the `equal height` variation can safely be removed
- **Divider** - `vertical divider` inside `ui grid` now accounts for column padding
- **Grid** - `celled grid` now removes internal cells on mobile and tablet when used with `doubling` grid responsive variation.
- **Grid** - Added `large screen only` and `widescreen only` responsive variations for grid.
- **Grid** - `equal width` grids now works without `row` wrappers
- **Grid** - rows can now be `stretched` as well as `middle aligned`, `bottom aligned` and `top aligned`!
- **Grid** - Fixed margins on `internally celled` grid
- **Grid** - `celled` and `internally celled` grid now use flexbox instead of `display: table;`
- **Divider** - Fixed slight offset in `vertical divider` when it automatically adjusts to `horizontal divider` inside a `stackable grid`
- **Grid** - Fixed responsive styling for grid types, more consistent display for `divided`, `celled,` on mobile
- **Grid** - Fix `doubling row` not working correctly inside a different `doubling grid` (css spec issue)
- **Grid** - Fix `doubling grid` incorrectly applying width to `(x) column row`
- **Grid** - First column on `stackable grid` no longer receives top margin
- **Grid** - `x column wide` inside `equal width/height` now cannot grow beyond column size
- **Grid** - Fixes colored grid columns not appearing when not nested in rows
- **Grid** - Small computer `page grid` gutters have been adjusted from 8% to 3% to allow for roomier layouts on small screens.
- **Grid** - Vertically divided grids now double row spacing to account for dividers
- **Grid** - `center aligned` no longer centers rows, just text. Use `centered grid` to center a grid column on the page.

### Version 1.12.3 - May 20, 2015

- **Grid** - Fixes bug causing colored variations not to work on columns without row wrappers. Backport from `2.x`

### Version 1.11.3-4 - March 6, 2015

- **Grid** - Added opt-in `stretched` variation for `equal height` instead of forcing `flex` on all `equal height columns` which may cause layout issues due to changes in rendering with `flexbox`.
- **Grid** - Fixes `stackable` `equal height/width` grid to remove `flex` on mobile when stacking
- **Grid** - Fixed `right/left/center aligned` to adjust `align-items` in flex containers like `equal height/width`

### Version 1.11.2 - March 6, 2015

- **Grid** - Equal width grids will now make column content stretch to full height, not just the column itself (requires flexbox). See examples [in the grid docs](http://www.semantic-ui.com/collections/grid.html#equal-height)

### Version 1.11.1 - March 5, 2015

- **Grid** - Fix issue in `centered grid` not centering `column` inside `row`

### Version 1.11.0 - March 3, 2015

- **Grid** - Fixes specificity of grid `column` colors to not affect other elements with columns

### Version 1.10.0 - February 23, 2015

- **Cards** - Fix consecutive card groups to preserve row flow (similar to consecutive grids)
- **Grid** - Stackable grid now has horizontal padding by default on mobile unless nested inside a `ui grid` or `ui segment` (not vertical)

### Version 1.8.1 - January 26, 2015

- **Grid** - Removed `text-align: left` from column definition. Now inherits from grid.
- **Grid** - Fix `doubling grid` setting `100% width` which may cause

### Version 1.7.0 - January 14, 2015

- **Grid** - Added `equal width` variation using `flex-box`, `equal height` now also uses `flex-box` (this may have to be removed if causes unexpected browser issues)

### Version 1.6.0 - January 05, 2015

- **Grid** - ``stackable grid`` now only adds horizontal padding when using ``stackable page grid``, otherwise content will take up full width of parent element

### Version 1.5.0 - December 30, 2014

- **Grid** - Fix display of equal height stackable grid. Add padding to divided stackable grid for dividers
- **Grid** - Fixed issues where negative margins on ``ui stackable grid`` could cause horizontal scroll bars on mobile

### Version 1.3.0 - December 17, 2014

- **Grid** - ``stackable grid`` now display correctly when nested inside a different ``stackable grid``
- **Segment** - Vertical segments now have padding on first/last element, fixing issues when using with grids
- **Grid** - Add another grid example

### Version 1.2.0 - December 08, 2014

- **Grid** - Fixes ``ui stackable grid`` sometimes not aligning correctly at mobile sizes with ``ui page grid``

### Version 1.0.0 - November 24, 2014

- **Grid** - ``ui divider`` can now be used inside of row columns as well as ``vertically divided grid`` variation
- **Grid** - Grid rows and columns now support color variations
- **Grid** - Grid has been rewritten to automatically create row flow without row wrappers
- **Grid** - Divided and celled grids can now be inverted for dark backgrounds
- **Grid** - Elements inside a grid that are not rows or columns will now align properly
- **Grid** - Fixed page grid allows for fixed pixel size containers used with a grid instead of percentage
- **Grid** - Vertically divided grid now does not include left/right gutters in divider

### Version 0.19.3 - Sep 11, 2014

- **Grid** - Fixes issue where some responsive grid stylings were being overridden by other variations (for example stackable overriding )

### Version 0.19.2 - Sep 11, 2014

- **Grid** - (Backport from 1.0 branch) Fixes issue where some combinations of (tablet/mobile/computer) only does not function correctly

### Version 0.16.0 - April 22, 2014

- **Form** - Fields can now be aligned to a grid **Thanks seralex-vi**

### Version 0.12.2 - Jan 21, 2014

- **Grid** - Fixes grid ``only tablet/mobile/computer`` showing both devices on exact pixel of breakpoint, i.e. 768px

### Version 0.12.0 - Jan 06, 2014

- **Menu** - Fixed menu now adds padding on the next element if it is a grid

### Version 0.10.3 - Dec 22, 2013

- **Grid** - Fixes issue where stackable grid was not working correctly when using (x) wide column

### Version 0.10.0 - Dec 05, 2013

- **Grid** - Adds ``doubling`` responsive variation which automatically formats content spacing based on device type
- **Grid** - Row padding is now EM not % based, this might shift layouts slightly
- **Grid** - Grid columns not inside a row will automatically receive row padding now. This will allow for content to flow correctly when row count is unknown
- **Grid** - Fixes margin on stackable grids

### Version 0.9.6 - Dec 04, 2013

- **Grid** - Fixes some instances where grid column width ``x wide`` was being overruled by parent element ``x column``.
- **Header, Grid, Segment** - Adds justified alignment

### Version 0.9.0 - Nov 5, 2013

- **Segment** - Segments can now be used with ``ui grid`` and ``ui grid column/row``
- **Grid** - Fixes comp/tablet/mobile only columns not working if not inside a row

### Version 0.6.1 - Oct 15, 2013

- Adds small/large sizing of modal, reformats default modal size to be slightly inset from page grid
- Fixes modal spacing on left/right content to match up with grid gutters

### Version 0.5.0 - Oct 10, 2013

- Fixes inheritance issue where grid column may sometimes not appear the correct size

### Version 0.3.1 - Sep 30, 2013

- Fixes Page Grid still receiving negative margin

### Version 0.3.0 - Sep 30, 2013

- Responsive Grid is now called "Page Grid". Responsive grids are now deprecated. This reduces confusion.
- Negative margins are now automatically removed from grids that are descendents of body tag.

### Version 0.2.0 - Sep 28, 2013

- Adds responsive modal styling, modal always now sits with 5% gutters under page grid responsive styling

### Version 0.1.0 - Sep 25, 2013

- Adds relaxed grid variation with increased gutters