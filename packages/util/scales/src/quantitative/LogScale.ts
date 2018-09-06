import { ScaleCreationContext, Scales } from '@markable/interfaces'
import { scaleLog } from 'd3-scale'
import { QuantitativeScale, QuantitativeValue } from './QuantitativeScale'

export class LogScale extends QuantitativeScale<QuantitativeValue, number> {
	private baseValue?: number

	public base(value?: number) {
		this.baseValue = value
		return this
	}

	protected createScale(args: ScaleCreationContext): Scales {
		const domain = this.getDomain(args)
		const range = this.getRange(args)
		const result = scaleLog()
			.domain(domain)
			.range(range)
		this.addCommonProperties(result)

		if (this.baseValue !== undefined) {
			result.base(this.baseValue)
		}
		return { [this.nameValue as string]: result }
	}
}
