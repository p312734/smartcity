function zeroPad(num: number, length: number): string {
    let numStr = num.toString();
    while (numStr.length < length) {
        numStr = "0" + numStr;
    }
    return numStr;
}

input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    basic.showString("L")
    OLED.writeStringNewLine("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR) + "-" + zeroPad(RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH), 3));
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showString("A")
    OLED.writeStringNewLine("Knopf A")
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    OLED.clear()
    RTC_DS1307.setTime(RTC_DS1307.TimeType.YEAR, 2025)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.MONTH, 2)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.DAY, 10)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.HOUR, 21)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.MINUTE, 20)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 0)
    OLED.writeStringNewLine("Uhrzeit gesetzt: " + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR)) + "-" + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH)) + "-" + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY)) + " " + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR)) + ":" + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE)) + ":" + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND)))
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showString("B")
    OLED.writeStringNewLine("Knopf B")
})
OLED.init(128, 64)
