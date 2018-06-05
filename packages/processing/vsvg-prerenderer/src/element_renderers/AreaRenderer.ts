import { Path } from 'd3-path'
import { SGMark, SGAreaItem, MarkType } from '@gog/mark-interfaces'
import { VSvgNode } from '@gog/vdom-interfaces'
import { emitMarkGroup, copyCommonProps, assertTypeIs } from './util'
import { area } from '../path'
import { MarkPrerenderer } from '@gog/prerender-interfaces'

export class AreaRenderer implements MarkPrerenderer<VSvgNode[]> {
	public static TARGET_MARK_TYPE = MarkType.Area

	public render(mark: SGMark<SGAreaItem>) {
		assertTypeIs(mark, AreaRenderer.TARGET_MARK_TYPE)

		const renderedItems: VSvgNode[] = []
		if (mark.items.map.length === 0) {
			return []
		}

		const areaItems = mark.items.map(a => ({
			...a,
			height: a.y2 - a.y,
		}))
		const areaItem = {
			type: 'path',
			attrs: {
				d: area(areaItems, undefined).toString(),
			},
		}
		mark.items.forEach(item => copyCommonProps(item, areaItem))

		return emitMarkGroup(MarkType.Area, mark.role, [areaItem])
	}
}
