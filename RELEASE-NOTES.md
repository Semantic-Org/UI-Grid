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