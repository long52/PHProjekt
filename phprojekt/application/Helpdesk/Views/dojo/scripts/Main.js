/**
 * This software is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License version 3 as published by the Free Software Foundation
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * @category   PHProjekt
 * @package    Application
 * @subpackage Helpdesk
 * @copyright  Copyright (c) 2010 Mayflower GmbH (http://www.mayflower.de)
 * @license    LGPL v3 (See LICENSE file)
 * @link       http://www.phprojekt.com
 * @since      File available since Release 6.0
 * @author     Mariano La Penna <mariano.lapenna@mayflower.de>
 */

dojo.provide("phpr.Helpdesk.Main");

dojo.declare("phpr.Helpdesk.Main", phpr.Default.Main, {
    constructor:function() {
        this.module = "Helpdesk";
        this.loadFunctions(this.module);

        this.gridWidget = phpr.Helpdesk.Grid;
        this.formWidget = phpr.Helpdesk.Form;
    }
});
