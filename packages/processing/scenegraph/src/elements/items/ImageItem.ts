import {
	MarkType,
	HorizontalAlignment,
	VerticalAlignment,
	SGImageItem,
} from '@markable/interfaces'
import { Item } from './Item'

export class ImageItem extends Item implements SGImageItem {
	public static ITEM_TYPE = MarkType.Image
	public readonly itemtype = ImageItem.ITEM_TYPE

	public url?: string
	public aspect?: boolean = true
	public align?: HorizontalAlignment = HorizontalAlignment.Left
	public baseline?: VerticalAlignment = VerticalAlignment.Top
}