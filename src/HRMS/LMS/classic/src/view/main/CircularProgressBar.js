Ext.define('LMS.view.main.CircularProgressBar', {
    extend: 'Ext.Widget',
    alias: 'widget.circularprogressbar',
    config: {
        /**
         * Set default @cfg values
         */
        showAnimation: true,
        radius: 100,
        value: 15,
        maxValue: 15,
        spacing: 10,
        color: '#09F',
        pendingColor: '#C00000',
        start: 0,
        borderWidth: 10,
        animationTime: 30,
        textColor: null,
        title: null,
        titleColor: null,
        footer: null,
        showLeaveInfo: true
    },
    cachedConfig: {
        percent: 100
    },
    element: {
        reference: 'element',
        tag: 'div',
        cls: 'canvas-align',
        children: [{
            tag: 'div',
            reference: 'canvasTitle',
            cls:'wtc-canvas-header-text'
        },{
            reference: 'canvasEl',
            tag: 'canvas',
            style: {
                'cursor': 'pointer'
            },
            listeners: {
                click: {
                    fn: function () {
                        var me = this,
                            records = {
                                value: me.config.value,
                                maxValue: me.config.maxValue,
                                textColor: me.config.textColor,
                                pendingColor: me.config.pendingColor
                            };
                        me.fireEvent('click',me,records);
                    },
                    element: 'innerElement'
                },
                mouseover: {
                    fn: function (pBar) {
                        var ctx = this.canvasEl.dom.getContext('2d');
                        ctx.globalAlpha = 0.6;
                        var customFont = 'bold 30px Arial';
                        this.showSimpleDraw(customFont);
                    },
                    element: 'innerElement'
                },
                mouseleave: {
                    fn: function (pBar) {
                        var ctx = this.canvasEl.dom.getContext('2d');
                        ctx.globalAlpha = 1;
                        var customFont = 'bold 15px Arial';
                        this.showSimpleDraw(customFont);
                    },
                    element: 'innerElement'
                }
            }
        }]
    },
    constructor: function(config) {
        this.callParent([config]);
        Ext.getBody().appendChild(this.element);
    },
    applyTitle: function(text) {
        var dimension = this.config.radius;
        if(this.containerEl) {
            this.containerEl.setWidth(dimension);
            this.canvasTitle.setWidth(dimension);
        }
        return text;
    },
    updateTitle: function(text) {
        if (!Ext.isEmpty(text)) {
            this.canvasTitle.setText(text);
        }
    },
    applyTitleColor: function (color) {
        var titleColor = this.config.titleColor;
        this.canvasTitle.setStyle('color',titleColor);
    },
    applyFooter: function(text) {
        var dimension = this.config.radius;
        if(this.containerEl) {
            this.containerEl.setWidth(dimension);
            this.canvasFooter.setWidth(dimension);
        }
        return text;
    },
    updateFooter: function(text) {
        if (!Ext.isEmpty(text)) {
            this.canvasFooter.setText(text);
        }
    },
    /**
     * Update height and width of inner canvas component based on radius config
     * Default dimension is 100/100
     */
    updateRadius: function(radius) {
        this.canvasEl.dom.setAttribute('height', radius);
        this.canvasEl.dom.setAttribute('width', radius);
        this.showIndicator();
    },
    /**
     * Checks for animation
     * if true call animated draw
     * else draw progress with out any animation
     */
    showIndicator: function() {
        var showAnimation = this.config.showAnimation;
        if (showAnimation) {
            this.showAnimatedDraw();
        } else {
            this.showSimpleDraw();
        }
    },
    // Animated draw
    showAnimatedDraw: function() {
        var me = this,
        ctx = this.canvasEl.dom.getContext('2d'),
        startAngle = 0,
        start = this.config.start,
        cw = ctx.canvas.width,
        ch = ctx.canvas.height,
        diff,
        dimension = this.config.radius,
        currentValue = this.config.value,
        maxValue = this.config.maxValue,
        completed = ((currentValue * 100) / maxValue).toFixed(2),
        centerCoordinateX = ctx.shadowOffsetX + (dimension / 2),
        centerCoordinateY = ctx.shadowOffsetY + (dimension / 2),
        radius = dimension / 2 - this.config.spacing,
        color = this.config.color,
        pendingColor = this.config.pendingColor,
        borderWidth = this.config.borderWidth,
        textColor = this.config.textColor ? this.config.textColor : color,
        percent = this.config.percent;

        function progressBar() {
            diff = ((startAngle / percent) * Math.PI * 2 * 10).toFixed(2);
            ctx.clearRect(0, 0, cw, ch);
            ctx.lineWidth = borderWidth;
            //Updating center % text
            me.showPercent(ctx, textColor, currentValue, centerCoordinateX, centerCoordinateY, cw, maxValue);
            // Drawing outer (pending arc)
            ctx.fillStyle = pendingColor;
            ctx.strokeStyle = pendingColor;
            ctx.beginPath();
            ctx.arc(centerCoordinateX, centerCoordinateY, radius, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.closePath();
            // Drawing progress bar indicator
            me.drawProgess(ctx, color, centerCoordinateX, centerCoordinateY, radius, start, diff, false);
            if (startAngle >= completed) {
                clearTimeout(interval);
            }
            startAngle++;
        }
        var interval = setInterval(progressBar, this.config.animationTime);
    },
    //Simple draw
    showSimpleDraw: function(customFont) {
        var me = this,
        ctx = me.canvasEl.dom.getContext('2d'),
        start = me.config.start,
        cw = ctx.canvas.width,
        ch = ctx.canvas.height,
        diff,
        dimension = me.config.radius,
        currentValue = me.config.value,
        maxValue = me.config.maxValue,
        completed = ((currentValue * 100) / maxValue).toFixed(2),
        centerCoordinateX = ctx.shadowOffsetX + (dimension / 2),
        centerCoordinateY = ctx.shadowOffsetY + (dimension / 2),
        radius = dimension / 2 - this.config.spacing,
        color = me.config.color,
        textColor = me.config.textColor ? me.config.textColor : color,
        percent = me.config.percent;
        diff = ((completed / percent) * Math.PI * 2 * 10).toFixed(2);
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = me.config.borderWidth;
        //Updating center % text
        me.showPercent(ctx, textColor, currentValue, centerCoordinateX, centerCoordinateY, cw, maxValue, customFont);
        // Drawing outer (pending arc)
        me.drawPending(ctx, centerCoordinateX, centerCoordinateY, radius, 0, Math.PI * 2, true);
        //drawing progress arc
        me.drawProgess(ctx, color, centerCoordinateX, centerCoordinateY, radius, start, diff, false);
    },
    showPercent: function(ctx, textColor, currentValue, x, y, cw, maxValue, customFont) {
        var showLeaveInfo = this.getShowLeaveInfo();
        if (showLeaveInfo) {
            ctx.fillStyle = textColor;
            if(customFont) {
                ctx.font = customFont;
            } else {
                ctx.font = 'bold 15px Arial';
            }
            ctx.textAlign = 'center';
            /*var span = document.createElement('span');
            span.textContent = options.percent + '%';*/
            ctx.fillText(currentValue + '/' + maxValue, x, y, cw / 2);
        }
    },
    drawPending: function(ctx, x, y, radius, startAngle, endAngle, counter) {
        ctx.fillStyle = this.config.pendingColor;
        ctx.strokeStyle = this.config.pendingColor;
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, Math.PI * 2, counter);
        ctx.stroke();
        ctx.closePath();
    },
    drawProgess: function(ctx, color, x, y, radius, start, diff, counter) {
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, start, diff / 10 + start, false);
        ctx.stroke();
        ctx.closePath();
    }
});