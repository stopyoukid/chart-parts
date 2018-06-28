// tslint:disable no-submodule-imports
import { Mark } from '@gog/scenegraph/lib/elements/Mark'
import { RuleItem } from '@gog/scenegraph/lib/elements/items/RuleItem'
import { renderMark } from '../'

describe('The Rule Renderer', () => {
	it('can render a rule with an x, y, and x2 value', () => {
		const mark = new Mark()
		mark.marktype = RuleItem.ITEM_TYPE

		const rule = new RuleItem()
		rule.x = 0
		rule.y = 0
		rule.x2 = 100
		mark.items.push(rule)

		const rendered = renderMark(mark)
		expect(rendered).toMatchSnapshot()
	})

	it('can render a rule with an x, y, and y value', () => {
		const mark = new Mark()
		mark.marktype = RuleItem.ITEM_TYPE

		const rule = new RuleItem()
		rule.x = 0
		rule.y = 0
		rule.y2 = 100
		mark.items.push(rule)

		const rendered = renderMark(mark)
		expect(rendered).toMatchSnapshot()
	})

	it('can render a rule with an x, y, and a smaller x2 value', () => {
		const mark = new Mark()
		mark.marktype = RuleItem.ITEM_TYPE

		const rule = new RuleItem()
		rule.x = 100
		rule.y = 100
		rule.x2 = 25
		mark.items.push(rule)

		const rendered = renderMark(mark)
		expect(rendered).toMatchSnapshot()
	})

	it('can render a rule with an x, y, and a smaller y value', () => {
		const mark = new Mark()
		mark.marktype = RuleItem.ITEM_TYPE

		const rule = new RuleItem()
		rule.x = 100
		rule.y = 100
		rule.y2 = 25
		mark.items.push(rule)

		const rendered = renderMark(mark)
		expect(rendered).toMatchSnapshot()
	})
})