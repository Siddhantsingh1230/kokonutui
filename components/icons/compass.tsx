import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function CompassOutline(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={cn(props.className)}
            {...props}
        >
            <title>Compass</title>
            {/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m7.236 6.255c-.605.16-1.42.485-2.594.955c-.542.217-.643.268-.717.333a1 1 0 0 0-.07.07c-.064.073-.115.174-.332.716c-.47 1.174-.794 1.99-.955 2.594c-.167.63-.085.791-.058.83a.8.8 0 0 0 .198.198c.039.027.2.109.83-.058c.605-.16 1.42-.485 2.595-.955c.541-.217.642-.268.716-.333a1 1 0 0 0 .07-.07c.064-.073.115-.174.332-.716c.47-1.174.794-1.99.955-2.594c.167-.63.085-.791.058-.83a.8.8 0 0 0-.198-.198c-.039-.027-.2-.109-.83.058m-.384-1.45c.69-.182 1.436-.271 2.057.15c.234.16.437.363.596.597c.422.621.333 1.367.15 2.057c-.186.705-.546 1.605-.991 2.717l-.02.05l-.034.085c-.163.409-.307.771-.564 1.064a2 2 0 0 1-.208.208c-.293.257-.655.401-1.065.564l-.083.034l-.05.02c-1.113.445-2.013.805-2.718.992c-.69.182-1.436.271-2.057-.15a2.3 2.3 0 0 1-.596-.597c-.422-.621-.333-1.367-.15-2.057c.186-.705.546-1.605.991-2.717l.02-.05l.034-.085c.163-.409.307-.771.564-1.064q.097-.11.208-.208c.293-.257.655-.401 1.065-.564l.083-.034l.05-.02c1.113-.445 2.013-.805 2.718-.992"
                clipRule="evenodd"
            />
        </svg>
    );
}
