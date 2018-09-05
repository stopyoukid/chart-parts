import { MarkType, SGMark, SGShapeItem } from '@markable/interfaces'
import { assertTypeIs } from './util'
import { VSvgMarkConverter } from './interfaces'

export class ShapeRenderer implements VSvgMarkConverter {
	public static TARGET_MARK_TYPE = MarkType.Shape

	public render(mark: SGMark<SGShapeItem>) {
		assertTypeIs(mark, ShapeRenderer.TARGET_MARK_TYPE)
		// TODO
		return { nodes: [] }
	}
}