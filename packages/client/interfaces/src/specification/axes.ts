export enum AxisOrientation {
	top = 'top',
	left = 'left',
	bottom = 'bottom',
	right = 'right',
}

/** Axis definition */
export interface Axis {
	/**
	 * The name of the scale backing the axis component.
	 */
	scale: string

	/**
	 * The orientation of the axis.
	 */
	orient: AxisOrientation
}

// /**
//  * An interpolation fraction indicating where, for band scales, axis ticks should be positioned.
//  * A value of 0 places ticks at the left edge of their bands. A value of 0.5 places ticks in the middle of their bands.
//  */
// bandPosition?: number

// /**
//  * A boolean flag indicating if the domain (the axis baseline) should be included as part of the axis (default true).
//  */
// domain?: boolean

// /**
//  * Color of axis domain line.
//  */
// domainColor?: string

// /**
//  * Stroke width of axis domain line.
//  */
// domainWidth?: number

// // encode? Object	Optional mark encodings for custom axis styling. Supports encoding blocks for axis, ticks, grid, labels, title, and domain. See custom axis encodings.

// /**
//  * The format specifier pattern for axis labels. For numerical values, must be a legal d3-format specifier.
//  * For date-time values, must be a legal d3-time-format specifier.
//  */
// format?: string

// /**
//  * A boolean flag indicating if grid lines should be included as part of the axis (default false).
//  */
// grid?: boolean

// /**
//  * Color of axis grid lines.
//  */
// gridColor?: boolean

// /**
//  * Stroke dash of axis grid lines (or [] for solid lines).
//  */
// gridDash?: number[]

// /**
//  * Opacity of axis grid lines.
//  */
// gridOpacity?: number

// /**
//  * The name of the scale to use for including grid lines. By default grid lines are driven by the same scale as the ticks and labels.
//  */
// gridScale?: string

// /**
//  * 	Stroke width of axis grid lines.
//  */
// gridWidth?: number

// /**
//  * A boolean flag indicating if labels should be included as part of the axis (default true).
//  */
// labels?: boolean

// /**
//  * Horizontal text alignment of axis tick labels, overriding the default setting for the current axis orientation.
//  */
// labelAlign?: string

// /**
//  * 	Angle in degrees of axis tick labels.
//  */
// labelAngle?: number

// /**
//  * 	Vertical text baseline of axis tick labels, overriding the default setting for the current axis orientation.
//  */
// labelBaseline?: string

// /**
//  * Indicates if labels should be hidden if they exceed the axis range. If false (the default) no bounds overlap analysis is performed.
//  * If true, labels will be hidden if they exceed the axis range by more than 1 pixel.
//  * If this property is a number, it specifies the pixel tolerance: the maximum amount by which a label bounding box may exceed the axis range.
//  */
// labelBound?: boolean | number

// /**
//  * 	Text color of axis tick labels.
//  */
// labelColor?: string

// /**
//  * 	Indicates if labels at the beginning or end of the axis should be aligned flush with the scale range.
//  * If a number, indicates a pixel distance threshold: labels with anchor coordinates within the threshold distance for an axis end-point will be flush-adjusted.
//  * If true, a default threshold of 1 pixel is used. Flush alignment for a horizontal axis will left-align labels near the beginning of the axis and right-align
//  * labels near the end. For vertical axes, bottom and top text baselines will be applied instead.
//  */
// labelFlush?: boolean | number

// /**
//  * Indicates the number of pixels by which to offset flush-adjusted labels (default 0). For example, a value of 2 will push flush-adjusted labels 2 pixels outward
//  * from the center of the axis. Offsets can help the labels better visually group with corresponding axis ticks.
//  */
// labelFlushOffset?: number

// /**
//  * Font name for axis tick labels.
//  */
// labelFont?: string

// /**
//  * Font size of axis tick labels.
//  */
// labelFontSize?: number

// /**
//  * Font weight of axis tick labels.
//  */
// labelFontWeight?: string | number

// /**
//  * The maximum allowed length in pixels of axis tick labels.
//  */
// labelLimit?: number

// /**
//  * The strategy to use for resolving overlap of axis labels. If false (the default), no overlap reduction is attempted.
//  * If set to true or "parity", a strategy of removing every other label is used (this works well for standard linear axes).
//  * If set to "greedy", a linear scan of the labels is performed, removing any label that overlaps with the last visible label (this often works better for log-scaled axes).
//  */
// labelOverlap?: boolean | string

// /**
//  * The padding in pixels between labels and ticks.
//  */
// labelPadding?: number

// /**
//  * The minimum extent in pixels that axis ticks and labels should use. This determines a minimum offset value for axis titles.
//  */
// minExtent?: number

// /**
//  * The maximum extent in pixels that axis ticks and labels should use. This determines a maximum offset value for axis titles.
//  */
// maxExtent?: number

// /**
//  * The orthogonal offset in pixels by which to displace the axis from its position along the edge of the chart.
//  */
// offset?: number

// /**
//  * The anchor position of the axis in pixels (default 0). For x-axes with top or bottom orientation, this sets the axis group x coordinate. For y-axes with left or right orientation, this sets the axis group y coordinate.
//  */
// position?: number

// /**
//  * A boolean flag indicating if ticks should be included as part of the axis (default true).
//  */
// ticks?: boolean

// /**
//  * 	Color of axis ticks.
//  */
// tickColor?: string

// /**
//  * A desired number of ticks, for axes visualizing quantitative scales. The resulting number may be different so that values are “nice” (multiples of 2, 5, 10) and lie within the underlying scale’s range.
//  * For scales of type time or utc, the tick count can instead be a time interval specifier.
//  * Legal string values are "millisecond", "second", "minute", "hour", "day", "week", "month", and "year".
//  * Alternatively, an object-valued interval specifier of the form {"interval": "month", "step": 3} includes a desired number of interval steps. Here, ticks are generated for each quarter (Jan, Apr, Jul, Oct) boundary.
//  */
// tickCount?: number | string | object

// /**
//  * Boolean flag indicating if an extra axis tick should be added for the initial position of the axis.
//  * This flag is useful for styling axes for band scales such that ticks are placed on band boundaries rather in the middle of a band.
//  * Use in conjunction with "bandPostion": 1 and an axis "padding" value of 0.
//  */
// tickExtra?: boolean

// /**
//  * Position offset in pixels to apply to ticks, labels, and gridlines.
//  */
// tickOffset?: number

// /**
//  * Boolean flag indicating if pixel position values should be rounded to the nearest integer.
//  */
// tickRound?: boolean

// /**
//  * The length in pixels of axis ticks.
//  */
// tickSize?: number

// /**
//  * Width in pixels of axis ticks.
//  */
// tickWidth?: number

// /**
//  * A title for the axis (none by default).
//  */
// title?: string

// /**
//  * 	Horizontal text alignment of axis titles.
//  */
// titleAlign?: string

// /**
//  * 	Angle in degrees of axis titles.
//  */
// titleAngle?: number

// /**
//  * 	Vertical text baseline for axis titles.
//  */
// titleBaseline?: string

// /**
//  * Text color of axis titles.
//  */
// titleColor?: string

// /**
//  * 	Font name for axis titles.
//  */
// titleFont?: string

// /**
//  * 	Font size of axis titles.
//  */
// titleFontSize?: number

// /**
//  * 	Font weight of axis titles.
//  */
// titleFontWeight?: string | number

// /**
//  * 	The maximum allowed length in pixels of axis titles.
//  */
// titleLimit?: number

// /**
//  * 	The padding in pixels between the axis labels and axis title.
//  */
// titlePadding?: number

// /**
//  * 	Custom X position of the axis title relative to the axis group, overriding the standard layout.
//  */
// titleX?: number

// /**
//  * 	Custom Y position of the axis title relative to the axis group, overriding the standard layout.
//  */
// titleY?: number

// //values?:	Array	Explicitly set the visible axis tick and label values.

// /**
//  * The integer z-index indicating the layering of the axis group relative to other axis, mark and legend groups. The default value is 0 and axes and grid lines are drawn behind any marks defined in the same specification level. Higher values (1) will cause axes and grid lines to be drawn on top of marks.
//  */
// zindex?: number