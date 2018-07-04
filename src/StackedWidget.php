<?php

/**
 * @author John Snook
 * @date 2018-07-2
 * @license https://github.com/johnsnook/yii2-ip-filter/LICENSE
 * @copyright 2018 John Snook Consulting
 */

namespace johnsnook\Stacked;

use johnsnook\stacked\StackedAsset;
use yii\bootstrap\Html;
use yii\bootstrap\Widget;

/**
 * Stacked jquery plugin wrapper
 */
class StackedWidget extends Widget {

    /** properties * */
    public $boostrapVersion = 3;
    public $containerOptions;
    public $gutterSize = 50;

    /** methods * */
    public function init() {
        parent::init();
        static::$autoIdPrefix = 'stacked-widget';
        $view = $this->getView();
        if (!isset($this->containerOptions['id'])) {
            $this->containerOptions['id'] = $this->id;
        }
//        die(json_encode($this->containerOptions));

        StackedAsset::register($view);

        $view->registerJs("$('#{$this->id}').Stacked({'gutter': {$this->gutterSize}});", $view::POS_READY, 'init');
        /** start capturing output buffer */
        ob_start();
    }

    public function run() {
        $out = Html::beginTag('div', $this->containerOptions);
        /** using the buffer, our widget can be used with begin/end */
        $out .= ob_get_clean();
        $out .= Html::endTag('div');
        return $out;
    }

}
