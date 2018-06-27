import { SGMark } from '@gog/scenegraph-interfaces'
import { VSvgMarkConverter, VSvgRenderContext } from './interfaces'

const itemRendererRegistry = new Map<string, VSvgMarkConverter>()

export function registerRenderer(
	markType: string,
	markRenderer: VSvgMarkConverter,
) {
	itemRendererRegistry.set(markType, markRenderer)
}

export function renderMark(mark: SGMark<any>, context: VSvgRenderContext) {
	if (!mark.marktype) {
		throw new Error(`Unhandled mark type "${mark.marktype}"`)
	}
	const renderer = itemRendererRegistry.get(mark.marktype)
	return renderer ? renderer.render(mark, context) : { nodes: [] }
}
