import { Dimension } from '@markable/interfaces'
import { band } from '@markable/scales'
import { DomainRangeScale, DomainRangeScaleProps } from '../DomainRangeScale'

export interface BandScaleProps
	extends DomainRangeScaleProps<string[], [number, number], Dimension> {
	/**
	 * The name of the band-width static scale
	 */
	bandWidth?: string

	/**
	 * The outer and inner padding value
	 */
	padding?: number

	/**
	 * The outer and inner padding value
	 */
	paddingInner?: number

	/**
	 * The outer and inner padding value
	 */
	paddingOuter?: number

	/**
	 * Bin alignment 0-beginning, 1=end
	 */
	align?: number
}

export class BandScale extends DomainRangeScale<
	BandScaleProps,
	string[],
	[number, number],
	Dimension
> {
	protected createScale() {
		const bandWidthName = this.props.bandWidth || this.props.name + 'Width'
		return band(this.props.name, bandWidthName)
			.table(this.props.table)
			.domain(this.props.domain)
			.range(this.props.range)
			.align(this.props.align)
			.padding(this.props.padding)
			.paddingOuter(this.props.paddingOuter)
			.paddingInner(this.props.paddingInner)
			.reverse(this.isReversed)
			.build()
	}
}