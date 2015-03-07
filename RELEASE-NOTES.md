### Version 1.11.3 - March 6, 2015

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
- **Header, Grid, Segment** - Adds justified alignemnt

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