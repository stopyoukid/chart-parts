import { Item } from './Item'
import {
	SGTextItem,
	HorizontalAlignment,
	VerticalTextAlignment,
	TextDirection,
	MarkType,
} from '@gog/mark-interfaces'

export class TextItem extends Item implements SGTextItem {
	public static ITEM_TYPE = MarkType.Text
	public readonly itemtype: string = TextItem.ITEM_TYPE

	public align?: HorizontalAlignment = HorizontalAlignment.LEFT
	public angle?: number = 0
	public baseline?: VerticalTextAlignment = VerticalTextAlignment.ALPHABETIC
	public dir?: TextDirection = TextDirection.LTR
	public dx?: number
	public dy?: number
	public ellipsis?: string = '...'
	public font?: string
	public fontSize?: number
	public fontWeight?: string | number
	public fontVariant?: string | number
	public fontStyle?: string
	public limit?: number = 0
	public radius?: number = 0
	public text?: string
	public theta?: number
}