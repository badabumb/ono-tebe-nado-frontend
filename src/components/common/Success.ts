import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";

interface ISuccess {
    total: number;
}

interface ISuccessActions {
    onclick: () => void;
}

export class Success extends Component<ISuccess> {
    protected _close: HTMLElement;

    constructor(container: HTMLElement, actions: ISuccessActions) {
        super(container);

        this._close = ensureElement<HTMLElement>('.state__action', this.container);

        if (actions?.onclick) {
            this._close.addEventListener('click', actions.onclick);
        }
    }
}