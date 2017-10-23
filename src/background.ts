import * as path from 'path';
import * as fs from 'fs';

import * as vscode from 'vscode';

import vsHelp from './vsHelp';

class Background {

    /**
     * Creates an instance of Background.
     * @memberof Background
     */
    constructor() {
        this.initialize();
    }

    /**
     * 第一次加载插件
     * 
     * @private
     * @type {boolean}
     * @memberof Background
     */
    private firstLoad: boolean = false;


    /**
     * 初始化
     * 
     * @private
     * @memberof Background
     */
    private initialize(): void {

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
}