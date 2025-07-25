import {
  computePosition,
  flip,
  shift,
  offset,
  inline,
  Placement,
} from "@floating-ui/dom";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { styles } from "../../core/Manager/src/styles";
import { Component } from "../../core";

export class ContextMenu extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = [
    styles.scrollbar,
    css`
      :host {
        pointer-events: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem;
        border-radius: var(--bim-ui_size-4xs);
        display: flex;
        transform-origin: top left;
        transform: scale(1);
        clip-path: circle(150% at top left);
        background-color: var(--bim-ui_bg-contrast-20);
        transition:
          clip-path 0.2s cubic-bezier(0.72, 0.1, 0.43, 0.93),
          transform 0.3s cubic-bezier(0.72, 0.1, 0.45, 2.35);
      }

      :host(:not([visible])) {
        transform: scale(0.8);
        clip-path: circle(0 at top left);
      }
    `,
  ];

  private _previousContainer: HTMLElement | null = null;
  private _placement?: Placement;

  @property({ type: String, reflect: true })
  get placement() {
    return this._placement;
  }

  set placement(value: Placement | undefined) {
    this._placement = value;
    this.updatePosition();
  }

  static dialog = Component.create<HTMLDialogElement>(() => {
    const onClick = (event: PointerEvent) => {
      if (event.target === ContextMenu.dialog) ContextMenu.removeMenus();
    };
    return html` <dialog
      @click=${onClick}
      @cancel=${() => ContextMenu.removeMenus()}
      data-context-dialog
      style="
      width: 0;
      height: 0;
      position: relative;
      padding: 0;
      border: none;
      outline: none;
      margin: none;
      overflow: visible;
      background-color: transparent;
    "
    ></dialog>`;
  });
  static menus: HTMLElement[] = [];
  static removeMenus() {
    for (const menu of ContextMenu.menus) {
      if (!(menu instanceof ContextMenu)) continue;
      menu.visible = false;
    }
    setTimeout(() => {
      ContextMenu.dialog.close();
      ContextMenu.dialog.remove();
    }, 310); // at the transition max speed
  }

  private _visible = false;

  @property({ type: Boolean, reflect: true })
  get visible() {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
    if (value) {
      if (!ContextMenu.dialog.parentElement) {
        document.body.append(ContextMenu.dialog);
      }
      this._previousContainer = this.parentElement;
      ContextMenu.dialog.style.top = `${window.scrollY || document.documentElement.scrollTop}px`;
      this.style.setProperty("display", "flex");
      ContextMenu.dialog.append(this);
      ContextMenu.dialog.showModal();
      this.updatePosition();
      this.dispatchEvent(new Event("visible"));
    } else {
      setTimeout(() => {
        this._previousContainer?.append(this);
        this._previousContainer = null;
        this.style.setProperty("display", "none");
        this.dispatchEvent(new Event("hidden"));
      }, 310); // at the transition max speed
    }
  }

  /**
   * Asynchronously updates the position of the context menu relative to a target element.
   * If no target element is provided, it attempts to use the parent node as the target.
   * The position is calculated using the `computePosition` function from `@floating-ui/dom`,
   * which considers various adjustments like offset, inline positioning, flipping, and shifting
   * to ensure the context menu is properly placed relative to the target element.
   *
   * @param [target] - The target element relative to which the context menu should be positioned.
   *                                 If not provided, the parent node is used as the target.
   * @returns A promise that resolves once the position has been updated. This method
   *                          does not explicitly return a value but updates the context menu's style
   *                          properties to position it on the screen.
   */
  async updatePosition() {
    if (!(this.visible && this._previousContainer)) return;
    const placement: Placement = this.placement ?? "right";
    const position = await computePosition(this._previousContainer, this, {
      placement,
      middleware: [offset(10), inline(), flip(), shift({ padding: 5 })],
    });
    const { x, y } = position;
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
  }

  connectedCallback() {
    super.connectedCallback();
    ContextMenu.menus.push(this);

    if (this.visible) {
      this.style.setProperty("width", "auto");
      this.style.setProperty("height", "auto");
    } else {
      this.style.setProperty("display", "none");
      this.style.setProperty("width", "0");
      this.style.setProperty("height", "0");
    }
  }

  protected render() {
    return html` <slot></slot> `;
  }
}
