import * as path from 'path';
import * as fs from 'fs';

import * as vscode from 'vscode';

import vsHelp from './vsHelp';
import vscodePath from './vscodePath';
import version from './version';

/**
 * 文件类型
 * 
 * @enum {number}
 */
enum fileType {
    /**
     * 未修改的css文件
     */
    empty,

    /**
     * hack 过的旧版本css文件
     */
    isOld,
    /**
     * hack 过的新版本的css文件
     */
    isNew
}

export default class Background {

    /**
     * Creates an instance of Background.
     * @memberof Background
     */
    constructor() {
        this.initialize();
    }

    //#region private fields 私有字段

    /**
     * 当前用户配置
     * 
     * @private
     * @type {*}
     * @memberof Background
     */
    private config: any = vscode.workspace.getConfiguration('background');

    //#endregion

    //#region private methods 私有方法

    /**
     * 获取 css 文件内容
     * 
     * @private
     * @returns {string} 
     * @memberof Background
     */
    private getCssContent(): string {
        return fs.readFileSync(vscodePath.cssPath, 'utf-8');
    }

    /**
     * 设置 css 文件内容
     * 
     * @private
     * @param {string} content 
     * @memberof Background
     */
    private saveCssContent(content: string) {
        fs.writeFileSync(vscodePath.cssPath, content, 'utf-8');
    }


    /**
     * 初始化
     * 
     * @private
     * @memberof Background
     */
    private initialize(): void {
        // 初始配置

        // 是否初次安装
        let firstload: boolean = this.checkFirstload();


    }

    /**
     * 检测是否初次加载，并在初次加载的时候提示用户
     * 
     * @private
     * @returns {boolean} 是否初次加载
     * @memberof Background
     */
    private checkFirstload(): boolean {
        const configPath = path.join(__dirname, '../assets/config.json');
        let info: { firstload: boolean } = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

        if (info.firstload) {
            // 提示
            vsHelp.showInfo('Welcome to use background! U can config it in settings.json.')
            // 标识插件已启动过
            info.firstload = false;
            fs.writeFileSync(configPath, JSON.stringify(info, null, '    '), 'utf-8');

            return true;
        }

        return false;
    }

    /**
     * 获取css文件状态
     * 
     * @private
     * @returns {fileType} 
     * @memberof Background
     */
    private getFileType(): fileType {
        let cssContent = this.getCssContent();

        // 未 hack 过
        let ifUnInstall: boolean = !~cssContent.indexOf(`background.ver`);

        if (ifUnInstall) {
            return fileType.empty;
        }

        // hack 过的旧版本
        let ifVerOld: boolean = !~cssContent.indexOf(`background.ver.${version}`);

        if (ifVerOld) {
            return fileType.isOld;
        }

        // hack 过的新版本
        return fileType.isNew;
    }

    private install(firstload: boolean) {
        let lastConfig = this.config;  // 之前的配置
        let config = vscode.workspace.getConfiguration('background'); // 当前用户配置

        // 1.如果配置文件改变到时候，当前插件配置没有改变，则返回
        if (!firstload && JSON.stringify(lastConfig) == JSON.stringify(config)) {
            // console.log('配置文件未改变.')
            return;
        }

        // 之后操作有两种：1.初次加载  2.配置文件改变 

        // 2.两次配置均为，未启动插件
        if (!lastConfig.enabled && !config.enabled) {
            return;
        }

        this.config = config; // 更新配置


    }

    /**
     * 卸载
     * 
     * @private
     * @memberof Background
     */
    private uninstall(): boolean {
        try {
            let content = this.getCssContent();
            content = this.clearCssContent(content);
            this.saveCssContent(content);
            return true;
        }
        catch (ex) {
            return false;
        }
    }

    /**
     * 清理css中的添加项
     * 
     * @private
     * @param {string} content 
     * @returns {string} 
     * @memberof Background
     */
    private clearCssContent(content: string): string {
        content = content.replace(/\/\*css-background-start\*\/[\s\S]*?\/\*css-background-end\*\//g, '');
        content = content.replace(/\s*$/, '');
        return content;
    }

    //#endregion
}