<?php

namespace johnsnook\stacked;

use yii\web\AssetBundle;

/**
 * @author John Snook
 * @date 2018-07-2
 * @license https://github.com/johnsnook/yii2-ip-filter/LICENSE
 * @copyright 2018 John Snook Consulting
 */
class StackedAsset extends AssetBundle {

    public $publishOptions = ['forceCopy' => true];
    public $sourcePath = __DIR__ . "/assets";
    public $js = [
        'js/jquery.stacked.js'
    ];
    public $depends = [
        'yii\web\JqueryAsset'
    ];

    public function init() {
        // Tell AssetBundle where the assets files are
        $this->sourcePath = __DIR__ . "/assets";
        parent::init();
    }

}
